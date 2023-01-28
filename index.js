var subjectObject = {
        "Dog": {
            "Lebra": [],
            "Golden": [],
        },
        "Cat": {
            "Maine Coon": [],
            "Ragdoll": []
        }
    }
    window.onload = function () {
        var categorySel = document.getElementById("slc1");
        var breedSel = document.getElementById("slc2");
        for (var x in subjectObject) {
            categorySel.options[categorySel.options.length] = new Option(x, x);
        }
        categorySel.onchange = function () {
            breedSel.length = 1;
            for (var y in subjectObject[this.value]) {
                breedSel.options[breedSel.options.length] = new Option(y, y);
            }
        }
    }
    var arr = [];
    var table = document.getElementById("tab");
    function func() {
        $(".main").find("#sl").val("");
        table.innerHTML = `<tr><th>Picture</th><th>Name</th><th>Age</th><th>Category</th><th>Breed</th><th>Gender</th></tr>`
        var obj = {};
        obj.name = document.getElementById("put1").value;
        obj.age = document.getElementById("put2").value;
        obj.category = document.getElementById("slc1").value;
        obj.breed = document.getElementById("slc2").value;
        var radios = document.getElementsByName("gender");
        var selected = Array.from(radios).find(radio => radio.checked);
        obj.gender = selected.value;
        if (obj.name != "" && obj.age != "" && obj.category != "" && obj.breed != "" && obj.gender != "") {
            arr.push(obj);
            arr.forEach(function func(value) {
                var tr = document.createElement('tr')
                if (value.breed == "Lebra") {
                    tr.innerHTML =
                     `<td class="dog"> <img class="card-img-top" src="https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/labrador-retriever-dog-breed-info.jpg?itok=5vfB1p-E" alt="Card image" style="width:50%"></td>
                      <td class="dog"> ${value.name} </td>                 
                      <td class="dog"> ${value.age} </td> 
                      <td class="dog"> ${value.category} </td> 
                      <td class="dog"> ${value.breed} </td> 
                      <td class="dog"> ${value.gender} </td>`;

                }

                if (value.breed == "Golden") {
                    tr.innerHTML =
                     `<td class="dog"> <img class="card-img-top" src="https://image.petmd.com/files/styles/863x625/public/2022-10/iStock-1397267365.jpg" alt="Card image" style="width:50% "></td>
                      <td class="dog"> ${value.name} </td>                 
                      <td class="dog"> ${value.age} </td> 
                      <td class="dog"> ${value.category} </td> 
                      <td class="dog"> ${value.breed} </td> 
                      <td class="dog"> ${value.gender} </td>`;
                }

                if (value.breed == "Maine Coon") {
                    tr.innerHTML =
                      `<td class="cat"> <img class="card-img-top" src="https://www.thesprucepets.com/thmb/9ucrMCMSd2R_HJs_lI-kFgjaYkc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1189893683-e0ff70596b3b4f0687ba573e5a671f74.jpg" alt="Card image" style="width:50%"></td>
                      <td class="cat"> ${value.name} </td>                 
                      <td class="cat"> ${value.age} </td> 
                      <td class="cat"> ${value.category} </td> 
                      <td class="cat"> ${value.breed} </td> 
                      <td class="cat"> ${value.gender} </td>`;
                }

                if (value.breed == "Ragdoll") {
                    tr.innerHTML =
                      `<td class="cat"> <img class="card-img-top" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F09%2F24%2Fragdoll-554742943-2000.jpg" alt="Card image" style="width:50%; margin-left:0px"></td>
                      <td class="cat"> ${value.name} </td>                 
                      <td class="cat"> ${value.age} </td> 
                      <td class="cat"> ${value.category} </td> 
                      <td class="cat"> ${value.breed} </td> 
                      <td class="cat"> ${value.gender} </td>`;
                }

                {
                    table.appendChild(tr);
                }
            })
        }
    }
    function fan() {
            var c = $("#sl").val();
    
            if (c == "Dog") {
                $(".dog").show();
                $(".cat").hide();
            }
            else if (c == "Cat") {
                $(".cat").show();
                $(".dog").hide();
            }
            else {
                $(".dog").show();
                $(".cat").show();
            }
    }
//     $('.filter-handle').on('change', function(e) {
//   var location = e.target.value;
//   var table = $('.filter-table-data');
//   if (location.length) {
//     table.find('tr[data-type!=' + location + ']').hide();
//     table.find('tr[data-type=' + location + ']').show();
//   } else {
//     table.find('tr').show();
//   }
// });