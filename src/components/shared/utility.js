export const truncateText = (string, maxLength) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};

export const mapOptions = (options)=>{

var opt= options.map((cat, index) => 
                   
                    
  <option key={index} value={cat}>
    {cat}
  </option>
 
)


return opt

}