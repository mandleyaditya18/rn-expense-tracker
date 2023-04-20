import { useMemo, forwardRef } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

import { BottomSheetBackground } from './BottomSheetBackground'

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
})

AddBottomSheet.displayName = 'AddBottomSheet'

export { AddBottomSheet }
