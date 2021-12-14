(() => {
    let withDoubleQuote = false;

    document.getElementById('input').addEventListener('change', function (e) {
        update();
    });

    document.getElementById('with-double-quote').addEventListener('change', function (e) {
        withDoubleQuote = e.target.checked;
        update();
    });

    function update() {
        const value = document.getElementById('input').value;
        const output = document.getElementById('output');
        output.textContent = convert(value);
    }

    function convert(value) {
        let v = value
            .trim()
            .split(/\r?\n/)
            .filter(v => v);

        if (withDoubleQuote) v = v.map(v => `"${v}"`)
        return v.join(",");
    }
})();
