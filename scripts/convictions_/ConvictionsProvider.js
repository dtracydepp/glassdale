let convictions = []

export const useConvictions = () => {
    return convictions.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => {
            return response.json()
        })
        .then (convictionsArray => convictions = convictionsArray)
    
}