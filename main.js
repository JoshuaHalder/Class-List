Student_list_array=[];

function submit()
{
    Student_list_array.push(document.getElementById("First").value);
    Student_list_array.push(document.getElementById("Second").value);
    Student_list_array.push(document.getElementById("Third").value);
    Student_list_array.push(document.getElementById("Fourth").value);
    console.log(Student_list_array);
    document.getElementById("Submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
    document.getElementById("Students_list").innerHTML=Student_list_array;
}
function sort()
{
    Student_list_array.sort();
    document.getElementById("Students_list").innerHTML=Student_list_array;
}