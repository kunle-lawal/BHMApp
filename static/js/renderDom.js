(function() {
    let steam = ['S', 'T', 'E', 'A', 'M'];
    let greats = [
        {
            name: 'Katherine Johnson',
            link: '../../assets/Katherine_Johnson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        },
        {
            name: 'Katherine Johnson',
            link: '../../assets/Katherine_Johnson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Mark Dean',
            link: '../../assets/Mark_Dean.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        },
        {
            name: 'George Washington Carver',
            link: '../../assets/George_Carver.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Dr. Mae Carol Jemison',
            link: '../../assets/Mae_Jemison.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Annie Easley',
            link: '../../assets/Annie_Easley_drawing.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Daniel Hale Williams',
            link: '../../assets/Annie_Easley_drawing.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Patricia Bath',
            link: '../../assets/Patricia_Bath.jpeg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        },
        {
            name: 'Lonnie G. Johnson',
            link: '../../assets/Lonnie_Johnson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Walter Lincoln Hawkins',
            link: '../../assets/Neil_deGrasse_Tyson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        }, 
        {
            name: 'Neil deGrasse Tyson',
            link: '../../assets/Neil_deGrasse_Tyson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        },
        {
            name: 'Jane Wright',
            link: '../../assets/Jane_Wright.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [0, 1, 0, 1, 1] //steam
        },
    ]

    {/* <div class="card closedCard" id = "card8" >
        <div class="photoContainer">
            <div class="photo"></div>
        </div>
        <div class="greatInfo">
            <h1>Neil deGrasse Tyson</h1>
            <h4>1900 - 2000</h4>
            <div class="steamItems">
                <h4 class="circle">S</h4>
                <h4 class="circle">T</h4>
                <h4>E</h4>
                <h4 class="circle">A</h4>
                <h4>M</h4>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam beatae quia saepe alias impedit quaerat.
                Sit modi iste facilis quaerat, ratione sunt, repellendus
                vel non placeat ullam inventore suscipit animi?
            </p>
        </div>
    </div> */}

    let card = "<div class=\"card closedCard\" id = \"card8\" ></div>"; //Contianer
    let greatInfo = "<div class=\"greatInfo\"></div>"; //Container
    let steamItems = "<div class=\"steamItems\"></div>"; //Container
    let photoContainer = (location) => `<div class=\"photoContainer\"> <div class=\"photo\" style=background-image:url('${location}'); ></div> </div>`;
    let name = (name) => `<h1>${name}</h1>`;
    let lifeLine = (lifeLine) => `<h4>${lifeLine}</h4>`;
    let steamItem = (hasCircle, index) => `<h4 class=${hasCircle === 1 ? 'circle' : ''}>${steam[index]}</h4>`;
    let text = (text) => `<p>${text}</p>`;

    // console.log($('#card1 > .greatInfo > .steamItems'))

    for(let i = 0; i < greats.length; i++) {
        card = `<div class=\"card closedCard\" id = \"card${i+1}\" ></div>`;
        console.log(i);
        console.log(greats[i]);
        $(".cards").append(card);
        $("#card" + i).append(photoContainer(greats[i].link));
        $("#card" + i).append(greatInfo);
        $("#card" + i + ' > .greatInfo').append(name(greats[i].name), lifeLine(greats[i].lifeLine));
        $("#card" + i + ' > .greatInfo').append(steamItems);
        for(let y = 0; y < greats[i].steamItems.length; y++) {
            $("#card" + i + ' > .greatInfo > .steamItems').append(steamItem(greats[i].steamItems[y], y));
        }
        $("#card" + i + ' > .greatInfo').append(text(greats[i].text));
    }
})()