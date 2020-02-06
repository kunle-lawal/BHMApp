(function() {
    let steam = ['S', 'T', 'E', 'A', 'M'];
    let greats = [
        {
            name: 'Katherine Johnson',
            link: 'assets/Katherine_Johnson.jpg',
            lifeLine: '1918-Present',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [1, 1, 1, 0, 1], //steam
            start: 1918,
        }, 
        {
            name: 'Mark Dean',
            link: 'assets/Mark_Dean.jpg',
            lifeLine: '1957-Present',
            text: 'Mark Dean was a computer scientist, engineer, and one of the pioneers in inventing the first IBM Personal Computer. He was also instrumental in developing color PC Monitors and the first gigahertz chip.',
            steamItems: [1, 1, 1, 0, 1], //steam
            start: 1957,
        },
        {
            name: 'George Washington Carver',
            link: 'assets/George_Carver.jpg',
            lifeLine: '1864-1943',
            text: 'Born into slavery, he became one of the most prominent scientists and inventors of his time. A teacher at the Tuskegee Institute, the agricultural department achieved national renown under his leadership. A monument showing him as a boy was the first national memorial erected in honor of an African American.',
            steamItems: [1, 0, 0, 0, 1], //steam
            start: 1864,
        }, 
        {
            name: 'Dr. Mae Carol Jemison',
            link: 'assets/Mae_Jemison.jpg',
            lifeLine: '1956-Present',
            text: 'Jemison joined the space program after she completed her medical degree, maintained a general practice, and served in the Peace Corps. After working at NASA from 1987 to 1993, Jemison founded The Jemison Group, Inc., which developed a satellite-based telecommunications system to improve health care delivery in developing nations. A professor in the Environmental Studies Program at Dartmouth College, she directed the Jemison Institute for Advancing Technology in Developing Countries.',
            steamItems: [1, 1, 1, 0, 1], //steam
            start: 1956
        }, 
        {
            name: 'Annie Easley',
            link: 'assets/Annie_Easley_drawing.jpg',
            lifeLine: '1933-2011',
            text: 'Annie Easley was a computer scientist and mathematician who was a leader in the NASA software development team and one of the first African-American to work as a computer scientist at NASA. ',
            steamItems: [1, 0, 0, 0, 1], //steam
            start: 1933
        }, 
        {
            name: 'Patricia Bath',
            link: 'assets/Patricia_Bath.jpeg',
            lifeLine: '1942-2019',
            text: 'First African-American woman to receive a medical patent and to complete a residency in ophthalmology. Bath co-founded the American Institute for the Prevention of Blindness, which established that "eyesight is a basic human right."  ',
            steamItems: [1, 1, 0, 0, 0], //steam
            start: 1942
        },
        {
            name: 'Lonnie G. Johnson',
            link: 'assets/Lonnie_Johnson.jpg',
            lifeLine: '1949-Present',
            text: 'Lonnie is a Former Air Force and Nasa engineer. He holds over 80 patents. HIs most popular invention being the Super Soaker water gun!',
            steamItems: [1, 1, 1, 1, 1], //steam
            start: 1949
        }, 
        {
            name: 'Walter Lincoln Hawkins',
            link: 'assets/Walter_Lincoln_Hawkins.jpg',
            lifeLine: '1911-1992',
            text: 'First African American to join the technical staff at AT&T\'s Bell Lab.Hawkins was instrumental in making universal telephone service possible.Hawkings along with some of his colleges invented a plastic coating that could withstand extreme fluctuations in temperature and last up to seventy years.',
            steamItems: [1, 1, 1, 0, 0], //steam
            start: 1911
        }, 
        {
            name: 'Neil deGrasse Tyson',
            link: 'assets/Neil_deGrasse_Tyson.jpg',
            lifeLine: '1958-Present',
            text: 'A writer, Tyson has authored 10 books, and co-wrote and hosted the PBS-NOVA series, Origins. The recipient of eighteen honorary doctorates and the NASA Distinguished Public Service Medal, he is executive editor, host, and narrator for Cosmos: A Spacetime Odyssey. He heads the Hayden Planetarium in New York City and is a research associate of the Department of Astrophysics at the American Museum of Natural History.',
            steamItems: [1, 1, 1, 1, 1], //steam
            start: 1958
        },
        {
            name: 'Jane Wright',
            link: 'assets/Jane_Wright.jpg',
            lifeLine: '1919-2013',
            text: 'Former NASA Physicist and proud Mathematician. She performed complex calculations that resulted in the success of the future space missions.',
            steamItems: [1, 1, 0, 1, 1], //steam
            start: 1919
        },
    ]

    greats.sort((a, b) => (a.start > b.start) ? 1 : -1);

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
        card = `<div class=\"card closedCard\" id = \"card${i}\" ></div>`;
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