import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Modal } from 'react-native'

import LevelSelection from './screens/LevelSelection'
import Header from './components/Header'
import params from './params'
import Final from './components/final'
import MineField from './components/MineField'
import { createMineBoard, clonedBoard, openField, hadExplosion, showMines, wonGame, invertFlag, flagsUsed, joia, wonGameByJoia } from './functions'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMineBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
      showfinal: false,
    }
  }

  onOpenField = (row, column) => {
    const board =clonedBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      this.setState({ showfinal: true })
    }

    if (won) {
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = clonedBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    joia(board, row, column)
    const wonJ = wonGameByJoia(board)
    

    if (won || wonJ) {
      showMines(board)
      Alert.alert('Parabéns!', 'Você venceu!')
    }

    this.setState({ board, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  render() {
    return (
      <View style={styles.container}>
        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />
        <Final isVisible={this.state.showfinal}
          onCancel={() => this.setState({ showfinal: false })} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())} 
          onFlagPress={() => this.setState({ showLevelSelection: true })}/>
        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField} onSelectField={this.onSelectField}/>
        </View>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: 'black',
  }
});
