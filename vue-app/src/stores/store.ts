import { defineStore } from "pinia";

export interface Property {
  id?: number;
  type?: string;
  zipCode?: string;
  price?: string;
  available?: boolean;
  dateAvailable?: string;
}

export type PropertyState = {
  property: Property;
  favProperties: Property[];
};

export const usePropertyStore = defineStore("property", {
  // state = constante
  state: () =>
    ({
      property: {
        id: undefined,
        type: "",
        zipCode: "",
        price: "",
        available: undefined,
        dateAvailable: "",
      },
      favProperties: [],
    } as PropertyState),
  actions: {
    async getData() {
      try {
        const response = await fetch("/src/data/data.json");
        if (response && response.status == 200) {
          const data = await response.json();
          return data;
        } else {
          console.error("Error: ", response.status, response.statusText);
        }
      } catch (err) {
        console.error("Error ", err);
      }
    },
    getLikedProperties() {
      return;
    },
    toggleLike(property: Property) {
      // vérifier dans le local storage si property est pas déjà présent si non ajouter si oui l'enlever
      if (this.favProperties.includes(property)) {
        this.favProperties.splice(this.favProperties.indexOf(property), 1);
      } else {
        this.favProperties.push(property);
      }
    },
  },
  persist: true,
});
