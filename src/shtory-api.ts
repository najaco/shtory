import { shtory } from "./shtory-model"

const SERVER_URL = 'thisisaplaceholderplsupdatelateroncedeployed'


/**
 * Gets a given story from a given user
 * @param {string} user_id the id of the user to query 
 * @param {string} story_id the id of the story to query
 * @param {string} token the current users JWT
 * @returns {shtory} returns shtory object requested, null if not found
 */
export async function getStory(user_id: string, story_id: string, token: string) {
    const endpoint = `${SERVER_URL}/story?user_id=${user_id}&story_id=${story_id}&token=${token}`
    const response = await fetch(endpoint, {
        method: 'GET',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    }).then(response => {
        if (!response.ok) {
            // TODO could implement verbose (show exact error) error handling here
            return null
        } else {
            return response.json()
        }
    }).then(responseJson => {
        if (!responseJson) {
            // TODO could implement simple (only know that it is error) error handling here
            return null
        } else {
            return responseJson as shtory
        }
    })
    return response
}