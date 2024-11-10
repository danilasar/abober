const simpleGetJson = async (url: string) => {
    console.log(url)
    try {
      let response = await fetch(url)
      console.log(response)
      if (!response.ok) {
          return "error"
      }
      let json = await response.json(); // читаем ответ в формате JSON
      return json
    } catch(ex) {
      return "error"
    }
}

export default simpleGetJson