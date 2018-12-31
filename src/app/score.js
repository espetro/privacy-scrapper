import * as appstore from "app-store-scraper";
import * as gplaystore from "google-play-scraper";

/**
 * Extracts the Privacy Policy score either from the ML model or from a database
 * Code 01 is an Android app
 * code 02 is an iOS app
 */
function getScoreFromApp(id, code) {
    if(code == 1) {
        gplaystore.app({id: this.id})
            .then(console.log)
            .catch(console.log)
    }
    else {
        appstore.app({id: this.id})
            .then(console.log)
            .catch(console.log)
    }
}

/**
 * Obtains the Privacy Policy score from a web's privacy policy
 * @param {*} name 
 * @param {*} policy 
 */
function getScoreFromWeb(name, policy) {

}