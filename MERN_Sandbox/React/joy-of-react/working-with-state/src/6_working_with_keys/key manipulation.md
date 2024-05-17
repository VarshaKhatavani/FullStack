<h1>Use of Keys </h1>
<h3>Your mission : </h3>
<li> Keys used : index,random value, crypto.randomUUID(), Date.now(), array length </li>
<li> Index : While using index, it can make it difficult to track changes to the array, as the keys will change every time an element is added or removed.  Use index as keys only you are sure that content is not getting deleted/modified 
</li>

![alt text](image-3.png)

<li>If you're using an array index as a key, it's possible that two sibling components may have the same key. This can cause unexpected behavior in your React app.</li>
<li> Random value : Each time react reload the component, due to random value react needs to render again and again  </li>
<li> Array length : Introduces error when element is deleted then according to length it will generate the key. Which leads duplicate keys. </li>

![alt text](image.png)

<li> Crypto.randomUUID() : Unique keys are essential for React's reconciliation process, helping it to update the DOM efficiently. The best method for generating keys. </li>

![alt text](image-1.png)

![alt text](image-2.png)
