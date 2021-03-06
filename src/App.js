import React, { Component } from 'react'
import { StyleSheet, Text, View, Alert, Modal } from 'react-native'

import LevelSelection from './screens/LevelSelection'
import Header from './components/Header'
import params from './params'
import Options from './screens/Options'
import Final from './components/final'
import FinalWin from './components/finalWin'
import FinalWin2 from './components/finalWin2'
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
      showfinalwin: false,
      showfinalwin2: false,
      showOptions: false,
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
      this.setState({ showfinalwin: true })
    }

    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = clonedBoard(this.state.board)
    invertFlag(board, row, column)
    joia(board, row, column)
    const wonJ = wonGameByJoia(board)
    const won = wonGame(board)
    
    

    if (won || wonJ) {
      showMines(board)
      if (wonJ){
        this.setState({ showfinalwin2: true })
      } else {
        this.setState({ showfinalwin: true })
      }
      
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
        <Options isVisible={this.state.showOptions}
          onCancel={() => this.setState({ showOptions: false })} />
        <Final isVisible={this.state.showfinal}
          onCancel={() => this.setState({ showfinal: false })} />
        <FinalWin isVisible={this.state.showfinalwin}
          onCancel={() => this.setState({ showfinalwin: false })} />
        <FinalWin2 isVisible={this.state.showfinalwin2}
          onCancel={() => this.setState({ showfinalwin2: false })} />
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())} onOptions={() => this.setState({ showOptions: true })}
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
