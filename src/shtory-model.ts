/**
 * Model to represent a shtory
 */
export interface shtory {
    /**
     * the id of this shtory
     */
    id: string;
    /**
     * the content of this shtory
     */
    text: string;
    /**
     * the id of the user who posted this shtory
     */
    user_id: string;
    /**
     * the date and time that this shtory was posted
     */
    timestamp: Date;
}