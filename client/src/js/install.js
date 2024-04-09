const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    //butInstall.style.visibility = 'visible';
    //butInstall.textContent = 'Install!'

    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const eventPrompt = window.defferedPrompt;
    if (!eventPrompt) {
        return;
    }

    eventPrompt.prompt();
    window.defferedPrompt = null
    butInstall.classList.toggle('hidden', true);
    // butInstall.setAttribute('disabled', false);
    // butInstall.textContent('Installed');
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('This application was installed!');
    window.defferedPrompt = null
});
