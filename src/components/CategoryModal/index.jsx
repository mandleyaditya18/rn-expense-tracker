import { useState, useCallback } from 'react'
import { StyleSheet, Pressable, ScrollView, View } from 'react-native'
import { Modal, RadioButtonGroup, Input, Button } from '../../designSystem'

import PropTypes from 'prop-types'
import { categories } from '../../constants'
import { defaultStyle } from './styles'

const CategoryModal = ({ show, setShow, form, handleChange }) => {
  const [category, setCategory] = useState(form.category.value)

  const onSelectCategory = useCallback(() => {
    handleChange('category', category)
    setShow(false)
  }, [handleChange, setShow, category])

  return (
    <>
      <Pressable onPress={() => setShow(true)}>
        <Input
          type="default"
          label="Category"
          invalid={!form.category.isValid}
          inputConfig={{
            value: categories.find((item) => item.id === form.category.value)
              ?.label,
            placeholder: 'Category',
            readOnly: true,
          }}
        />
      </Pressable>
      <Modal show={show} setShow={setShow} modalStyle={styles.modal}>
        <ScrollView>
          <RadioButtonGroup
            items={categories}
            selected={category}
            onChange={setCategory}
          />
        </ScrollView>
        <View style={styles.modalFooter}>
          <Button title="Confirm" type="primary" onPress={onSelectCategory} />
        </View>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({ ...defaultStyle })

CategoryModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  form: PropTypes.object,
  handleChange: PropTypes.func,
}

export { CategoryModal }
