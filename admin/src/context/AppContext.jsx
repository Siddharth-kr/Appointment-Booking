import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = '₹'

            const calculateAge = (dob) => {
            const today = new Date()
            const birtDate = new Date(dob)

            let age = today.getFullYear() - birtDate.getFullYear()
            return age
        }

    const months = [ "", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

    const slotDateFormat = (slotDate) => {
    if (!slotDate || typeof slotDate !== 'string') {
    console.warn("slotDateFormat received invalid input:", slotDate)
    return "Invalid Date"
  }

  const dateArray = slotDate.split('_')
  if (dateArray.length !== 3) {
    return "Invalid Date"
  }

  return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`
    }

    const value = {
        calculateAge,
        slotDateFormat,
        currency
    }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider