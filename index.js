const inputDate = document.querySelector("input")
const result = document.querySelector('p')

inputDate.addEventListener('change',function(){
    const birthDate = new Date(this.value)
    const currentDate = new Date()
    const newDate = new Date(currentDate - birthDate)


    const years = newDate.getFullYear() - 1970
    const months = newDate.getMonth()
    const days = newDate.getDate() - 1

    result.innerHTML = `you're ${years} years ${months} months ${days} days old .`
})