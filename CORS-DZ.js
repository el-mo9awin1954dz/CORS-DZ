//Dependencies

const Axios = require("axios")
const Fs = require("fs")

//Variables
const Self_Args = process.argv.slice(2)

const args = process.argv.slice(2);
const CORS = args[3];
const BUGALERT = args[4];
const token = args[5];
const channel = args[6];
const messageme = args[7];



var Self = {
    check_index: 0,
    data: null,
    results: []
}

if(CORS === undefined || BUGALERT === undefined || token === undefined || channel === undefined || messageme === undefined) {

    const str = `
        DZROOT BUG
        SCAN
        FIND
        EXPLOIT
                        DZ-HACKING-LAB @EL-MO9AWIN\n 
                                        `;



    console.log(str);

    console.log('\n\n','\x1b[31m',
     `
    ⠀⠀⢀⣀⣀⣀⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣀⣀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣾⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⠀⠀⢀⠀⠈⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⠀⠁⠀⠘⠁⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀⠈⠀⠀⡇⠀⠀⠀⠀
⣀⣀⣀⠀⠀⠀⣿⠀⠀⠀⠀⠀⠄⠀⠀⠸⢰⡏⠉⠳⣄⠰⠀⠀⢰⣷⠶⠛⣧⠀
⢻⡀⠈⠙⠲⡄⣿⠀⠀⠀⠀⠀⠀⠀⠠⠀⢸⠀⠀⠀⠈⠓⠒⠒⠛⠁⠀⠀⣿⠀
⠀⠻⣄⠀⠀⠙⣿⠀⠀⠀⠈⠁⠀⢠⠄⣰⠟⠀⢀⡔⢠⠀⠀⠀⠀⣠⠠⡄⠘⢧
⠀⠀⠈⠛⢦⣀⣿⠀⠀⢠⡆⠀⠀⠈⠀⣯⠀⠀⠈⠛⠛⠀⠠⢦⠄⠙⠛⠃⠀⢸
⠀⠀⠀⠀⠀⠉⣿⠀⠀⠀⢠⠀⠀⢠⠀⠹⣆⠀⠀⠀⠢⢤⠠⠞⠤⡠⠄⠀⢀⡾
⠀⠀⠀⠀⠀⢀⡿⠦⢤⣤⣤⣤⣤⣤⣤⣤⡼⣷⠶⠤⢤⣤⣤⡤⢤⡤⠶⠖⠋⠀
⠀⠀⠀⠀⠀⠸⣤⡴⠋⠸⣇⣠⠼⠁⠀⠀⠀⠹⣄⣠⠞⠀⢾⡀⣠⠃⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⠀
    `,'\x1b[0m');


    console.log('DZ-HACKING-LAB @EL-MO9AWIN\n');

}
//Functions
async function check(i){
    try{
        const response = await Axios({
            method: "GET",
            url: Self.data[i],
            headers: {
                origin: CORS
            }
        })

        if(JSON.stringify(response.headers).indexOf(CORS) !== -1){
            console.log(`${Self.data[i]} VULNERABLE TO CORS.`)
            Self.results.push(Self.data[i])
            const notifier = require('node-notifier');

            var MSG = messageme;
    // String
            var alert = " BUG FOUND ON :" + Self.data[i] + " \n" + MSG;
    // Object
            notifier.notify({
            	title: 'BUG FIND',
                message: alert,
            });

	    console.log('\n\n','\x1b[31m',
              `             
             ⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⡟⠋⣍⣩⣽⣿⣿⣿⣿⣿⡍⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⡟⠀⣘⠙⣿⣿⣿⡿⠟⢻⣿⠀⠀⠀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠛⠿⠅⠙⣿⠋⠀⠀⢸⡿⠿⠛⠋⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣇⡀⠀⠀⠀⣿⡆⠀⠀⠘⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣫⠃⠄⢀⣤⠁⠀⠀⣴⡿⠋⣹⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠻⣷⣾⣿⢀⣴⠟⠋⠀⠀⠉⠙⢷⣤⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀NEVER GIVE UP⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⡾⠋⠀⠀⠀⢀⣀⣀⡀⠘⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡾⣱⡟⠁⠀⠀⠀⠀⠀⠀⠉⢿⡄⠈⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡟⢱⡏⢀⣠⠤⣄⠀⠀⠀⠀⠀⠈⠻⣄⠈⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀DREAM 
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⡟⣠⠋⠀⢸⣇⣀⡟⢀⡄⠀⠀⠀⠀⠀⠈⠣⢿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡿⡜⠁⠀⠀⠈⠉⠉⠀⢸⠃⠀⠀⠀⠀⠀⠀⠀⠈⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀CODE
⢀⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡟⠁⠀⠀⠀⠀⠀⠀⢠⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠛⠿⣿⣷⣦⣤⣀⠀⠀⠀⢸⣿⠁⠀⠀⠀⠀⠀⠀⠀⣾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     HACK⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠈⡙⠻⢿⣿⣶⣦⣼⡏⠀⠀⠀⠀⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠰⣿⣷⣶⣤⣝⣛⣿⣿⣿⣦⣄⣠⡄⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠉⠉⠛⠿⢿⣿⣶⣯⣿⣿⣿⣿⣦⣤⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⢉⣛⣻⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡆⠈⠉⠀⠀⠈⠉⠉⡝⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣹⠷⠒⠛⠓⠓⠒⠲⠦⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡶⠶⣦⣤⣀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣾⣿⣿⣿⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣇⠀⠀⠀⠈⠉⠛⠶⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣯⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣸⡟⠀⡄⠀⠀⠀⠀⠰⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⠟⠁⠀⠙⠻⢿⣿⣦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡿⠁⠀⢧⠀⠀⠀⠀⠀⠹⣷⣄⠀⠀⠀⠀⠀⣠⣾⣿⠁⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣦⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⡆⠸⡆⠀⠀⠀⠀⠀⠙⢿⣧⡀⠀⠀⢰⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣷⣤⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⣧⠀⢹⠀⠀⠀⠀⠀⠀⠈⢿⣿⣦⣤⣾⣿⣿⡿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣶⣄⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⢹⠀⠈⣇⠀⠀⠀⠀⠀⠀⠀⠉⠻⢿⣿⣿⣿⠀⢻⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⡆
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡇⠀⠸⡆⠀⢻⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠋⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⣇⠀⠀⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⢻⡄⠀⢸⣇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣞⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⢸⣇⠀⠈⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡀⠀⠀⢿⠀⠀⢸⡇⠀⠀⠀⢰⡀⠀⠀⠀⠀⠀⠀⠘⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠀⠀⢸⣧⠀⠸⣿⠀⠀⠀⠀⢷⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡇⠀⠀⠀⣿⡀⠀⣿⡄⠀⠀⠀⠀⣇⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⢹⣇⠀⢹⣇⠀⠀⠀⠀⠸⡆⠀⠀⠀⠀⠀⠀⠀⠈⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⣿⡄⠀⢿⠀⠀⠀⠀⠀⢳⠀⠀⠀⠀⠀⠀⠀⠀⠈⢿⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⡆⠀⠀⠀⢹⣇⠀⢸⡇⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣧⠀⠀⠀⠘⣿⠀⠀⣇⠀⠀⠀⠀⠀⠹⣆⠀⠀⠀⠀⠀⠀⠀⠀⢹⣷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀⠀⠀⠀⢻⡇⠀⠘⡆⠀⠀⠀⠀⠀⢿⣆⠀⠀⠀⠀⠀⢀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⠀⠀⠀⠀⢸⣿⠀⠀⢧⠀⠀⠀⠀⠀⠘⣿⡄⠀⠀⣀⣴⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣀⣀⣠⣤⣼⣿⡀⠀⠀⠀⠀⠀⠀⢀⣠⣾⡟⣉⣉⣩⣿⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⢁⣠⠴⣿⠛⠛⠛⠛⣿⡛⠛⢻⠟⢻⠉⠀⠀⢀⣸⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⡤⢶⡯⢥⣀⣹⣄⣠⠤⢞⣩⠷⣶⣉⣀⣨⣷⠶⠚⠉⠁⣹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠿⣧⣤⡤⢽⣧⣤⠤⢿⢤⣴⣿⣤⣤⣤⣿⣤⣤⣼⡦⠤⠴⡶⣿⡇⠀⠀⠀⠀⠀⠀⠀
                         `,'\x1b[0m');

		console.log("MSG FROM SCANNER :>>>>>>>>> %s",BUGALERT);
		console.log('\n\n\x1b[31m',"FOUND BUG || PAYLOAD >>",'\x1b[0m',PAYLOAD);
                console.log("\n\nFOUND BUG >>> ",Self.data[i]+" |PAYLOAD| "+CORS)
                const https = require('https')
                const querystring = require('querystring')
                const FOUND = Self.data[i];
                const message = "[#] DZPOC FOUND BUG >>> URL+PAYLOAD [1337] |> "+FOUND+ "\n"+messageme;
                const cheerio = require('cheerio');
                const axios = require('axios');
                var url = FOUND;
                async function me (x) {
                await axios.get(x)
                .then((res) => {

                //cheerio 
                //https://axios-http.com/docs/res_schema

                        //body
                var body = res.data;
                var statusCode = res.status;
                var statusText =  res.statusText;
                var headers = res.headers;
                var request = res.request;
                var config = res.config;

                        //jquery
                let $ = cheerio.load(body);

                        //variables
                console.log(body);
                console.log(statusCode);
                console.log(statusText);
                console.log(headers);
                console.log(config);
                console.log(request);

                }).catch(async function (e) {
                await console.log(e);
                });
                };

                me(url);

                module.exports = {
                	sendMessage,
                        sendMessageFor,
                        sendRequest
                }

		function sendMessage (token, channel, message) {
                	return sendMessageFor(token, channel)(message)
                }

                function sendMessageFor (token, channel) {
                	const baseUrl = `https://api.telegram.org/bot${token}`

                return message => {
                	const urlParams = querystring.stringify({
                        chat_id: channel,
                        text: message,
                        parse_mode: 'HTML'
                })

                return sendRequest(`${baseUrl}/sendMessage?${urlParams}`)
                	}
                }

                function sendRequest (url) {
                	return new Promise((resolve, reject) => {
                                https.get(url, res => res.statusCode === 200 ? resolve(res) : reject(res))
                                .on('error', reject)
                        })
                }
                sendMessage (token, channel, message)

        }else{
            console.log(`${Self.data[i]} NOT VULNERABLE TO CORS.`)
        }
    }catch{
        console.log(`${Self.data[i]} NOT VULNERABLE TO CORS.`)
    }

    Self.check_index++
    if(Self.check_index === Self.data.length){
        console.log("FINISHED CHECKING.")
        if(!Self.results.length){
            console.log("NO LINKS IS VULNERABLE TO CORS.")
        }else{
            console.log(`SAVING RESULTS TO ${Self_Args[1]}`)
            Fs.writeFileSync(Self_Args[1], Self.results.join("\n"), "utf8")
            console.log(`RESULTS successfully saved to ${Self_Args[1]}`)
        }

        process.exit()
    }
}

//Main
if(!Self_Args.length){
    console.log("node CORS-DZ.js <input> <output> CORS-HOST BUG-ALERT TOKEN ID-CHANNEL NOTIFICATION-MSG")
    process.exit()
}

if(!Fs.existsSync(Self_Args[0])){
    console.log("INVALID INPUT.")
    process.exit()
}

if(!Self_Args[1]){
    console.log("INVALID OUTPUT.")
    process.exit()
}

const input_data =  Fs.readFileSync(Self_Args[0], "utf8").replace(/\r/g, "").split("\n")

if(!input_data.length){
    console.log("INPUT DATA IS EMPTY.")
    process.exit()
}

Self.data = input_data

for( i = 0; i <= input_data.length-1; i++ ){
    check(i)
}
