const url = 'https://httpbin.org/xml';

//RPH 10/18/23 - Replacement/example of "Telnet"
const fetchData = async () => {
  try {
    const response = await fetch(url);
    console.log(response.status);
    const data = await response.text();                   
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();