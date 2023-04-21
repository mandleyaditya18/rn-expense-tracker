import { useMemo, forwardRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { RadioButtonGroup, Button } from '../designSystem'
import { BottomSheetBackground } from './BottomSheetBackground'

import { transactionTypes } from '../constants'

const AddBottomSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ['10%', '30%'], [])

  return (
    <BottomSheetModal
      ref={ref}
      index={1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      backgroundComponent={BottomSheetBackground}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Add Transaction</Text>
        <View style={styles.content}>
          <RadioButtonGroup
            items={transactionTypes}
            selected={transactionTypes?.[0]?.id}
          />
          <Button title="Add" onPress={() => null} />
        </View>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'poppins600',
    fontSize: 24,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 32,
  },
})

AddBottomSheet.displayName = 'AddBottomSheet'

export { AddBottomSheet }
