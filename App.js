import { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import { ModalPassword } from './src/components/modal'

let charset = '%9&X8WD9WRwybHpu6LS3tZf^H9R^#jV%^SdVK$DbesQunfzDpG44cB79UP&Do2^R7tD5hj5s@&@Lz6cY5wWjattuDmWNUe$Xv^W#'

export default function App(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  function generatePassword(){
    let password = ''
    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }

    setPasswordValue(password)
    setModalVisible(true)
  }

  return(
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
        style={styles.logo}
        resizeMode='contain'
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#FF0000'
          minimumTrackTintColor='#000'
          thumbTintColor='#392de9'
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) }/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F3F3FF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo:{
    width: 250,
    height: 250,
    marginBottom: 20
  },

  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  button:{
    backgroundColor: '#392de9',
    width: '80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,

  },

  buttonText:{
    color: '#FFF',
    fontSize: 20,
  },

  title:{
    fontSize: 30,
    fontWeight: 'bold'
  }
})