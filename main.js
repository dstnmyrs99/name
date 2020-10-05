const key = "du352012622"


$(".lookup").on("click", ()=>{
  lookup($(".name-to-lookup").val());
})
$(".random").on('click', random);


function lookup(name){
$.get(`https://www.behindthename.com/api/related.json?name=${name}&usage=eng&key=${key}`, (data)=>{
  let names = data['names']
  let namesList = '';
  console.log(names);
  $(names).each((i, v)=>{
    namesList += ("<p>" + v + "<br></p>");
  })
  console.log(namesList);
  $(".results").html(namesList);
})
}

function random(){
  $.get(`https://www.behindthename.com/api/random.json?usage=eng&number=6&key=${key}`, (data)=>{
    let names = data['names']
    let namesList = '';
    console.log(names);
    $(names).each((i, v)=>{
      namesList += ("<p>" + v + "<br></p><br>");
    })
    console.log(namesList);
    $(".results").html(namesList);
    $('p').addClass('random').on("click", (e)=>{
      let newName = ($(e.target)[0]);
      lookup($(newName).text());
      });
  })
}
