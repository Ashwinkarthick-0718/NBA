var myDropdown=document.getElementsByName('sample')[0];

function displayData() {
  console.log(myDropdown.value);
    fetch(myDropdown.value + '.json')
      .then(response => response.json())
      .then(data => {
        const s1 = data.s1;
        const s2 = data.s2;
        const s3 = data.s3;
        const s4 = data.s4;
        const s5 = data.s5;
    

        document.getElementById('RollNo1').style.background = "#e7edf0";
        document.getElementById('Count1').style.background = "#e7edf0";
        const RollNoElement1 = document.getElementById('RollNo1');
        const CountElement1 = document.getElementById('Count1');
        RollNoElement1.textContent = s1.RollNo;
        CountElement1.textContent = s1.Count;
    


        document.getElementById('RollNo2').style.background = "#e7edf0";
        document.getElementById('Count2').style.background = "#e7edf0";
        const RollNoElement2 = document.getElementById('RollNo2');
        const CountElement2 = document.getElementById('Count2');
        RollNoElement2.textContent = s2.RollNo;
        CountElement2.textContent = s2.Count;
  

        document.getElementById('RollNo3').style.background = "#e7edf0";
        document.getElementById('Count3').style.background = "#e7edf0";
        const RollNoElement3 = document.getElementById('RollNo3');
        const CountElement3 = document.getElementById('Count3');
        RollNoElement3.textContent = s3.RollNo;
        CountElement3.textContent = s3.Count;
  
        document.getElementById('RollNo4').style.background = "#e7edf0";
        document.getElementById('Count4').style.background = "#e7edf0";
        const RollNoElement4 = document.getElementById('RollNo4');
        const CountElement4 = document.getElementById('Count4');
        RollNoElement4.textContent = s4.RollNo;
        CountElement4.textContent = s4.Count;
  

        document.getElementById('RollNo5').style.background = "#e7edf0";
        document.getElementById('Count5').style.background = "#e7edf0";
        const RollNoElement5 = document.getElementById('RollNo5');
        const CountElement5 = document.getElementById('Count5');
        RollNoElement5.textContent = s5.RollNo;
        CountElement5.textContent = s5.Count;

    });
}

  