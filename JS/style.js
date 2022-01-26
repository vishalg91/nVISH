
// table script
const data = [
    {
        "name": "Jennifer",
        "age": 24
    },
    {
        "name": "Kate",
        "age": 18
    },
    {
        "name": "David",
        "age": 25
    },
    {
        "name": "Mark",
        "age": 25
    }
]

function loadData(user) {
    for (var i = 0; i < user.length; i++) {
        $("#userTable tbody").append("<tr><td>" + user[i].name + "</td><td>" + user[i].age + "</td></tr>");
    }
}

loadData(data)


function removeData() {
    $("#userTable tbody tr").remove();
}

let sortable = true

function sortTable(type) {
    sortable = !sortable
    let user1
    if (sortable) {
        user1 = data.sort((a, b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0))
    } else {
        user1 = data.sort((b, a) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0))
    }
    removeData();
    loadData(user1)
}


// menu and right value script
let menuData = {
    "distinguished technologist program": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "mobile solutions": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    "HTML5 canvas": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum.",
    "domain experties": "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
}

menuHandler(Object.keys(menuData)[0])

function menuHandler(type) {
    removeRightValues()
    $("#rightValues").append("<h4>" + type + "</h4>");
    $("#rightValues").append("<p>" + menuData[type] + "</p>");
}

function removeRightValues() {
    $("#rightValues h4").remove();
    $("#rightValues p").remove();
}

showMenu()

function showMenu() {
    for (var i = 0; i < Object.keys(menuData).length; i++) {
        $("#leftMenu").append("<li onclick='menuHandler(`" + Object.keys(menuData)[i] + "`)'>" + Object.keys(menuData)[i] + "</li>");
    }
}

// slidebar script
var slideIndex = [1, 2, 3];
var minValue = 1
maxValue = 5
showImages(slideIndex);

function plusDivs(n) {
    if (n === 'minus') {
        let deleteValue = slideIndex[0] - 1
        if (deleteValue < minValue) {
            slideIndex.pop()
            slideIndex.unshift(maxValue);
        } else {
            slideIndex.pop()
            slideIndex.unshift(deleteValue);
        }
    } else {
        let addValue = slideIndex[slideIndex.length - 1] + 1
        if (addValue <= maxValue) {
            slideIndex.push(addValue)
            slideIndex.shift()
        } else {
            slideIndex.push(minValue)
            slideIndex.shift()
        }
    }
    removeDivs()
    showImages(slideIndex);
}

function removeDivs() {
    $("#slideShow li").remove();
}

function showImages(nArr) {
    for (var i = 0; i < nArr.length; i++) {
        $("#slideShow").append("<li><img src='../images/" + nArr[i] + "_dtp_image.jfif' alt='img1' /><a class='enroll-now' href='#enrollNow'>Enroll Now</a></li>");
    }
}