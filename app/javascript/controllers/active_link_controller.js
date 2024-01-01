import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ["nav"];

    toggle(event) {
        this.navTargets.forEach(nav => {
            if (nav === event.target) {
                nav.classList.add("bg-gray-800");
            } else {
                nav.classList.remove("bg-gray-800");
            }
        });
    }
}

