
function expenseBtn(e){
    e.preventDefault()
    // count++
    let category=document.querySelector("#category").value
    let amount=document.querySelector("#amount").value
    let description=document.querySelector("#description").value
    let date=document.querySelector("#date").value

    
    let deleteBtn=document.createElement('button')
    deleteBtn.innerText="Delete"
    deleteBtn.id="delete-btn"
    deleteBtn.addEventListener('click',function(){
        tableData.remove()
    })

    //creating expense table
    const tableData=document.createElement('tr')
    tableData.innerHTML=`
    <td>${category}</td>
    <td>${amount}</td>
    <td>${description}</td>
    <td>${date}</td>
    `

    const action=document.createElement("td")
    action.appendChild(deleteBtn)

    tableData.appendChild(action)
    const table=document.querySelector("#expense-data")
    table.appendChild(tableData)
    // document.querySelector("#main-form").reset()
}
const expenses=document.addEventListener('submit',expenseBtn)