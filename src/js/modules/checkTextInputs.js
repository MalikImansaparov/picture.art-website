const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);
    // user can only to write russian register
    txtInputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default checkTextInputs;
