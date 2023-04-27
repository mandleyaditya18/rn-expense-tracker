import { useState, useCallback } from 'react'
import { useGoBack } from './useGoBack'

const useTransactionForm = () => {
  const { goBack } = useGoBack()

  const [form, setForm] = useState({
    title: {
      value: '',
      isValid: true,
    },
    amount: {
      value: '',
      isValid: true,
    },
    category: {
      value: '',
      isValid: true,
    },
    description: {
      value: '',
      isValid: true,
    },
    date: {
      value: '',
      isValid: true,
    },
  })

  const handleChange = useCallback((inputType, enteredValue) => {
    setForm((prev) => {
      return { ...prev, [inputType]: { value: enteredValue, isValid: true } }
    })
  }, [])

  const handleSubmit = useCallback(() => {
    const isTitleValid = form.title.value.trim().length > 0
    const isAmountValid = !isNaN(form.amount.value) && form.amount.value > 0
    const isCategoryValid = form.category.value.trim().length > 0
    const isDescriptionValid = form.description.value.trim().length > 0
    const isDateValid = form.date.value.trim().length > 0

    if (
      !isTitleValid ||
      !isAmountValid ||
      !isCategoryValid ||
      !isDescriptionValid ||
      !isDateValid
    ) {
      setForm((prev) => ({
        ...prev,
        title: { ...prev.title, isValid: isTitleValid },
        amount: { ...prev.amount, isValid: isAmountValid },
        category: { ...prev.category, isValid: isCategoryValid },
        description: { ...prev.description, isValid: isDescriptionValid },
        date: { ...prev.date, isValid: isDateValid },
      }))

      return
    }

    // TODO: Add transaction to database
    console.log('Successfully submitted: ', form)
  }, [form])

  const resetForm = useCallback(() => {
    setForm({
      title: {
        value: '',
        isValid: true,
      },
      amount: {
        value: '',
        isValid: true,
      },
      category: {
        value: '',
        isValid: true,
      },
      description: {
        value: '',
        isValid: true,
      },
      date: {
        value: '',
        isValid: true,
      },
    })
  })

  const handleCancel = useCallback(() => {
    resetForm()
    goBack()
  }, [resetForm, goBack])

  const values = {
    form,
    handleChange,
    handleSubmit,
    handleCancel,
    resetForm,
  }

  return values
}

export { useTransactionForm }
