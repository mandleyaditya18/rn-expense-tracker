import { useMemo, useCallback, useState, forwardRef } from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { RadioButtonGroup, Button, Heading } from '../../designSystem'
import { BottomSheetBackground } from '../BottomSheetBackground'

import { transactionTypes } from '../../constants'
import { defaultStyle } from './styles'

const AddBottomSheet = forwardRef((props, ref) => {
  const navigation = useNavigation()

  const [selectedOption, setSelectedOption] = useState(
    transactionTypes?.[0]?.id
  )

  const snapPoints = useMemo(() => ['10%', '30%'], [])

  const onPressAdd = useCallback(() => {
    navigation.navigate('AddTransaction', {
      transactionType: transactionTypes.find(
        (item) => item.id === selectedOption
      ).label,
    })
    ref?.current?.dismiss()
  }, [navigation, selectedOption])

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundComponent={BottomSheetBackground}
    >
      <View style={styles.container}>
        <Heading title="Add Transaction" />
        <View style={styles.content}>
          <RadioButtonGroup
            items={transactionTypes}
            selected={selectedOption}
            onChange={setSelectedOption}
          />
          <Button title="Add" onPress={onPressAdd} />
        </View>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({ ...defaultStyle })

AddBottomSheet.displayName = 'AddBottomSheet'

export { AddBottomSheet }
