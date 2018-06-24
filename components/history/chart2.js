import React, { Component } from "react";
import {
  PropTypes,
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableHighlight,
  Dimensions
} from 'react-native'

import Icon from "react-native-vector-icons/MaterialIcons";
import normalize from '../../styles/normalize';
const { RATIO_X, RATIO_Y, DEVICE_HEIGHT, DEVICE_WIDTH, RATIO_F } = normalize;



export default class PlayerLog extends Component {

  constructor (props) {
    super(props)
    const data = this.props.stats[0];
    const width = this.getWidth(data)
    this.state = {
      Monday: new Animated.Value(width.Monday),
      Tuesday: new Animated.Value(width.Monday),
      Wednesday: new Animated.Value(width.Wednesday),
      Thursday: new Animated.Value(width.Thursday),
      Friday: new Animated.Value(width.Friday),
      Saturday: new Animated.Value(width.Saturday),
      Sunday: new Animated.Value(width.Sunday),
      stats: this.props.stats,
      currentIndex: 0
    }
  }

  /**
   * Calculate width of each bar
   * @params {pts: {Number}, ast, reb, stl, blk, tov, min}
   * @return {pts: {Number}, ast, reb, stl, blk, tov, min}
   */
  getWidth (data) {
    const maxWidth = DEVICE_WIDTH - 80;
    const indicators = Object.keys(data);
    const maxEarning = 10000;
    let width = {}
    let widthCap // Give width a max cap
    indicators.forEach(indicator => {
      /* React-Native bug: if width=0 at first time, the borderRadius can't be implemented in the View */
      widthCap = (data[indicator] / maxEarning) * maxWidth;
      width[indicator] = widthCap <= 1 ? 1 : widthCap
    })

    return width
  }

  onPressLeft () {
    const {currentIndex} = this.state
    if (currentIndex < this.state.stats.length - 1) {
      this.handleAnimation(currentIndex + 1);
    }
  }

  onPressRight () {
    const {currentIndex} = this.state
    if (currentIndex > 0) this.handleAnimation(currentIndex - 1)
  }

  renderStats(earnings){
    const days = Object.keys(earnings);
    const index = Math.floor(Math.random() * 5);
    const colors = {
      Monday: ['#6E2C00', '#BA4A00', '#A04000', '#DC7633', '#E67E22'],
      Tuesday: ['#17202A', '#273746', '#34495E', '#616A6B', '#424949'],
      Wednesday: ['#7D6608', '#1D8348', '#D4AC0D', '#28B463', '#F4D03F'],
      Thursday: ['#145A32', '#0E6655', '#229954', '#45B39D', '#52BE80'],
      Friday: ['#154360', '#2980B9', '#2471A3', '#3498DB', '#7FB3D5'],
      Saturday: ['#4A235A', '#78281F', '#6C3483', '#E74C3C', '#A569BD'],
      Sunday: ['#76448A', '#641E16', '#641E16', '#A93226', '#CD6155']
    }
    const rendered = days.map( (day) =>{
      const color = colors[day][index];
      return(
        <View style={[styles.item,]} key={day}>
          <Text style={[styles.label, {color}]}>{day}</Text>
          <View style={styles.data}>
            <Animated.View style={[styles.bar, styles.points, {width: this.state[day]}, {backgroundColor: color}]} />
            <Text style={[styles.dataNumber, { color }]}>{earnings[day]}</Text>
          </View>
        </View>
      )}
    );
    return rendered;
  }

  handleAnimation (index) {
    const width = this.getWidth(this.state.stats[index])
    const { currentIndex } = this.state;

    const indicators = Object.keys(this.state.stats[currentIndex]);
    Animated.parallel(indicators.map(item => {
      return Animated.timing(this.state[item], {toValue: width[item]})
    })).start()
    /**
     * Animated won't trigger react life cycle
     * I'm not sure if using animated and setState in a same time would affect performance, not bad for now
     */
    this.setState({
      currentIndex: index
    })
  }

  render () {
    const {currentIndex} = this.state;
    const data = this.state.stats[currentIndex];

    /* set opacity=0 if no prev or no next, or the size will be changed unexpected */
    const canPrev = currentIndex < this.state.stats.length - 1 ? 1 : 0;
    const canNext = currentIndex > 0 ? 1 : 0
    return (
      <View style={styles.container}>
        {this.renderStats(data)}

        <View style={styles.controller}>
          <TouchableHighlight onPress={this.onPressLeft.bind(this)} underlayColor='transparent' style={[styles.button, {opacity: canPrev}]}>
            <Icon name="chevron-left" size={28} color='#6B7C96' style={styles.chevronLeft} />
          </TouchableHighlight>
          <Text style={styles.date}>30-02-2017</Text>
          <TouchableHighlight onPress={this.onPressRight.bind(this)} underlayColor='transparent' style={[styles.button, {opacity: canNext}]}>
            <Icon name="chevron-right" size={28} color='#6B7C96' style={styles.chevronRight} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  // Item
  item: {
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
    paddingHorizontal: 20
  },
  label: {
    color: '#CBCBCB',
    fontSize: 12,
    position: 'relative',
  },
  data: {
    flexDirection: 'row'
  },
  dataNumber: {
    color: 'red',
    fontSize: 11
  },
  // Bar
  bar: {
    alignSelf: 'center',
    borderRadius: 5,
    height: 8,
    marginRight: 5
  },
  points: {
    backgroundColor: '#F55443'
  },
  assists: {
    backgroundColor: '#FCBD24'
  },
  rebounds: {
    backgroundColor: '#59838B'
  },
  steals: {
    backgroundColor: '#4D98E4'
  },
  blocks: {
    backgroundColor: '#418E50'
  },
  turnovers: {
    backgroundColor: '#7B7FEC'
  },
  minutes: {
    backgroundColor: '#3ABAA4'
  },
  // controller
  controller: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15
  },
  button: {
    flex: 1,
    position: 'relative',
    top: -1
  },
  chevronLeft: {
    alignSelf: 'flex-end',
    height: 28,
    marginRight: 10,
    width: 28
  },
  chevronRight: {
    alignSelf: 'flex-start',
    height: 28,
    marginLeft: 10,
    width: 28
  },
  date: {
    color: '#6B7C96',
    flex: 1,
    fontSize: 22,
    fontWeight: '300',
    height: 28,
    textAlign: 'center'
  }

})
