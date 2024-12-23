import { Participant } from '../helpers/Participant';

const CLOSE_BUTTON = 'modal-header-close-button';

/**
 * Base class for all dialogs.
 */
export default class BaseDialog {
    participant: Participant;

    /**
     * Initializes for a participant.
     *
     * @param {Participant} participant - The participant.
     */
    constructor(participant: Participant) {
        this.participant = participant;
    }

    /**
     *  Clicks on the X (close) button.
     */
    async clickCloseButton(): Promise<void> {
        await this.participant.driver.$(`#${CLOSE_BUTTON}`).click();
    }
}
