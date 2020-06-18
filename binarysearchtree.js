class Node
{
    constructor(value)
    {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }

    insert(value)
    {
        const newNode = new Node(value);
        if (this.root === null)
        {
            this.root = newNode;
        }
        else
        {
            let currentNode = this.root;
            while(true)
            {
                if (value < currentNode.value)
                {
                    if (currentNode.left === null)
                    {
                        currentNode.left = newNode;
                        return this;
                    }
                    else
                    {
                        currentNode = currentNode.left;
                    }
                }
                else
                {
                    if (currentNode.right === null)
                    {
                        currentNode.right = newNode;
                        return this;
                    }
                    else
                    {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
    remove(value)
    {
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode !==null)
        {
            if (value < currentNode.value)
            {
                parentNode = currentNode;
                currentNode = currentNode.left;
            }
            else if (value > currentNode.value)
            {
                parentNode = currentNode;
                currentNode = currentNode.right;
            }
            else if (value === currentNode.value)
            {
                if (currentNode.right === null)
                {
                    if (parentNode === null)
                    {
                        this.root = currentNode.left
                    }
                    else 
                    {
                        if(currentNode.value < parentNode.value)
                        {
                            parentNode.left = currentNode.left;
                        }
                        else if(currentNode.value > parentNode.value)
                        {
                            parentNode.right = currentNode.left;
                        }
                    }
                }
                else if(currentNode.right.left === null)
                {
                    if (parentNode === null)
                    {
                        this.root = currentNode.right;
                    }
                    else
                    {
                        if(currentNode.value < parentNode.value)
                        {
                            parentNode.left = currentNode.right;
                        }
                        else if(currentNode.value > parentNode.value)
                        {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
                else
                {
                    let leftmost = currentNode.right.left
                    let leftmostParent = currentNode.right
                    while (leftmost.left !== null)
                    {   
                        leftmostParent = leftmost
                        leftmost = leftmost.left
                    }
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left
                    leftmost.right = currentNode.right
                    if (parentNode === null)
                    {
                        this.root = leftmost;
                    }
                    else
                    {
                        if(currentNode.value < parentNode.value)
                        {
                            parentNode.left = leftmost;
                        }
                        else if(currentNode.value > parentNode.value)
                        {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return this;
            }
        }
    }
}

const m = new BinarySearchTree();
m.insert(100);
m.insert(50);
m.insert(40);
m.insert(20);
m.insert(75);
m.insert(80);
m.insert(60);
m.insert(55);
m.insert(65);
m.remove(50);
console.log(m.root.left.right.left.value)
