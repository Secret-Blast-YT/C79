i_d_k = [];

function submit() {
    name_1 = document.getElementById("text_1").value;
    name_2 = document.getElementById("text_2").value;
    name_3 = document.getElementById("text_3").value;
    name_4 = document.getElementById("text_4").value;

    i_d_k.push(name_1);
    i_d_k.push(name_2);
    i_d_k.push(name_3);
    i_d_k.push(name_4);
    console.log(i_d_k);
    document.getElementById("display_name").innerHTML = i_d_k;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    i_d_k.sort();
    document.getElementById("display_name").innerHTML = i_d_k;
}