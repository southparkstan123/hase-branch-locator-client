export const generateHtmlForContent = (input) => {
  const websiteRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9]+(-?[a-zA-Z0-9])*\.)+[\w]{2,}(\/\S*)?$/ig;
  return input.split('#').filter(el => el !== "").map((el) => {
    if(el === '/a'){
      return el.replace('/a','</a>');
    } else if(el.match(websiteRegex)) {
      return 'href="https://' + el + '" target="_blank"' + '>' + el;  
    } else if(el === 'a'){
      return el.replace('a', '<a ');     
    } else if(el === 'br'){
      return el.replace('br', '<br>');     
    } else {
      return el
    }
  }).join("");
}