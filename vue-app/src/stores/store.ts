import { defineStore } from 'pinia'

export interface Property {
  id?: number
  type?: string,
  zipCode?: string,
  price?: string,
  available?: boolean,
  dateAvailable?: string
}

export type PropertyState = {
  property: Property
}

export const usePropertyStore = defineStore('property', {
  state: () => ({
    property: {
      id: undefined,
      type: '',
      zipCode: '',
      price: '',
      available: undefined,
      dateAvailable: ''
    }
  } as PropertyState),
  actions: {
    async getData() {
      try {
        const response = await fetch('/src/data/data.json')
        if(response && response.status == 200) {
          const data = await response.json();
          console.log('----', data)
          return data
        } else {
          console.error('Error: ', response.status, response.statusText)
        }
      } catch (err) {
        console.error('Error ', err)
      }
    }
  }
})
