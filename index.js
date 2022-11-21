const form = document.getElementById('my-form');

const mylist = document.getElementById('items');

form.addEventListener('submit', addItem);

mylist.addEventListener('click', remove);

function addItem(e){
    e.preventDefault();
    
    const amount = document.getElementById('amt').value;
    const description = document.getElementById('dsc').value;
    const category = document.getElementById('ctg').value;
    const li = document.createElement('li');
    const delbutton = document.createElement('button');
    li.className = 'list-group-item';
    delbutton.className = 'btn btn-danger btn-sm float-right delete';
    delbutton.appendChild(document.createTextNode('X'));

    const obj = {
        amount: amount,
        describe: description,
        category: category
    }

    obj.amount = amount;
    obj.describe = description;
    obj.category = category;

    localStorage.setItem(description, JSON.stringify(obj));

    li.appendChild(document.createTextNode(amount));
    li.appendChild(document.createTextNode('    -    '));
    li.appendChild(document.createTextNode(description));
    li.appendChild(document.createTextNode('    -    '));
    li.appendChild(document.createTextNode(category));
    li.appendChild(document.createTextNode('         '));
    li.appendChild(delbutton);
    mylist.appendChild(li);
    
}

function remove(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        console.log(li.childNodes[2]);
        
        mylist.removeChild(li);
        localStorage.removeItem(li.childNodes[2]);
    }
}

