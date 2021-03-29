

 export const truncateText = (string, maxLength) => {
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return `${string.substring(0, maxLength)}...`;
};



export const searchResult=(query)=>{
  return query.map((data,index)=>
<div>
{data.header}
</div>
)
 }

 
 