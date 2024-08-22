const baseUrl = "http://localhost:8125";

async function fetchAndSet(url){
    const res = await fetch(`${baseUrl}` + url);
    return res.text();
}

async function changeSliders(){
    const totalSlider = document.getElementById("memory-usage-slider");
    const freeSlider = document.getElementById("free-memory-slider");

    const usedField = document.getElementById("used-memory");
    const freeField = document.getElementById("free-memory");

    const total = (parseInt(await fetchAndSet("/info/mem")) / 1000).toFixed(2);
    const free = (parseInt(await fetchAndSet("/info/free_mem")) / 1000).toFixed(2);
    const used = (total - free).toFixed(2);

    totalSlider.max = total;
    freeSlider.max = total;

    totalSlider.value = used;
    freeSlider.value = free;

    freeField.innerHTML = free;
    usedField.innerHTML = used;
}

async function update(){
    document.getElementById("hostname").innerHTML = await fetchAndSet("/info/hostname");
    document.getElementById("uptime").innerHTML = await fetchAndSet("/info/uptime");

    await changeSliders();
}

setInterval(update, 1000);