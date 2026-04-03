created react app.
now removing all default stuff and css.
after reading what to build first build core concept then i improved later.
A palette block or image display block.
creating components folder.
before creating palette component i will create context to manage these blockes so i create context folder inside a maincontext no i use name builderContext.jsx file name then do manage data globally.
declared BuilderContext using createcontext.
now i will create provider for this Builder.
created provider now next step is to wrap component inside this builder provider.
now i do testing with local state so creating home component and wrap this home in app.jsx inside builder provider.
created pages folder i will maintain component based architecture.
created home.jsx under pages folder.
now importing this home component and wrapping inside builder component.
now doing some test with state adding block in home and saving them in ui with previous values and spread operator then i will improve move this stuff into context.
tested blocks add and update on every block generate i pass random id to update it particularly and to update take id as argument and update it.
now i will improve context with this idea.
creating global state to add blocks in context.
first focus on add block, so i am building a function handleAddBlock and taking a argument which is type to know what type of block is this inside function i am creating a new variable newBlock to then i can set previous value with that newBlock here in newBlock i save id to make my work easy i can update this later using this id later i will improve handleAddBlock.
for now i am testing handleAddBlock and all blocks global state to map previous is coming or whats going on,so passing as value in provider then use in home later i create seperate component for add and show block in ui.
now destructuring values in home using usecontext.
creating three buttons for adding these blocks text image or a customizable header then add a event listener onclick and pass type as argument what type of block is this then mapping blocks to check it work or what to happen.
its work i am adding any block saving blocks state as state data got empty after refresh its okay will improve this using localstorage to save blocks.
now creating seperate components to create block or to show in ui.
created palette.jsx to create blocks, moved this code into palette.jsx and imported palette component in home.
to show in ui creating a main canvas that is written in pdf so creating another component canvas.jsx as of now only showing block.type, later improve it with drag and drop functionality.
importes canvas component in home.
now testing again as it is becoming single page.
it works.
blocks has unique id and type now i will update in context in handleAddBlock that newBlock i am pushing with previous so adding content field to newBlock now i am declaring content as empty string later when i set input fields in canvas show block.content while mapping.
content is nothing as i passed content with empty string.
now focusing on this content to get value using update functionality.
now changing in canvas inside mapping adding three input tags for every block. 
now setting conditional operations with input and block.type if block.type is text as i added this functionality while adding a block in palette using passed type as argument, so block.type is text i will input with placeholder like enter text using and and operator now doing this for all three inputs for header header placeholder for image enter image url.
now making this input controlled passing value as block.content and onchange to handleUpdateBlock before this lets build this function.
inside context creating a function that take id as i already passed id while generating block i passed id as date.now for uniqueness either i can use Math.random its ok and also this handleUpdateBlock take value to update,now i am updating state setBlocks inside this function, gettting prev blocks using map and with the ternary operator update value like if b.id i mean block b.id=== match that current block i am selected on frontend then ? ...spread that block also add value to content like this content:value if id not match : b keep block is as it was.
now i am passing handleUpdateBlock as value then destructure in canvas.
in canvas while mapping blocks now i will set value as block.content as i set condition in handleUpdateBlock also passing handleUpdateBlock on onchange event with block.id or event target value.
now adding this functionality on all three inputs.
checked it works.
now the problem is after refresh blocks disappear because all data in localstate, now moving to implement localstorage to persist data on browser.

i saved blocks in localstorage.setItem("blocks") and json.stringify(blocks) its okay wrapped this functionality into useeffect and pass dependency as blocks whenever blocks change it saves block automatic, now getting the saved blocks and stored in savedBlocks = localstoarge.getitem("blocks") then parsed it i move this effect on top so after load get this.
tested it wont work becuase second useeffect saved an empty array before the first useEffect could load old data.
to solve this i created boolean state then i can tell when loadaed set to true by default it is false.
now i am getting savedBlocks if true then parse and after that setloaded(true) then in second effect if loaded true or after loading localstorage.setitem and as dependency i passed blocks or loaded whenever change do save.
i tested it works.
now i will move on to drag drop functionality.

installed the @hello-pangea/dnd library.
after testing in demo, it not work properly so i will not use pangea library instead i go with dnd-kit.
checked dnd-kit overview on their website it it amazing with react and it is modern.
installing libraries @dnd-kit/core @dnd-kit/sortable @dnd-kit/utilities.
@dnd-kit/core provides drag and drop functionality.
@dnd-kit/sortable helps to reorder items in a list.
@dnd-kit/utilities  used for applying drag animations (CSS.Transform).
dndcontext is the main wrapper that enables drag and drop in the canvas.
sortablecontext tells react that the blocks list is sortable.
usesortable - each block is made draggable using useSortable(),it provides listeners and attributes -> required for drag events,transform and transition -> used for smooth movement animation and setNodeRef -> connects the draggable block with the dom element.
to reorder block creating a function in builder context with name handleReorderBlock that take newblock argument and set globally with setblock(newblock) then passing this function as value now destructuring handleReorderBlock into canvas.
created handleDragEnd function in canvas that take event event can be active or over so get start and stop event get this indexes find with blocks.findindex (b) => b.id === active.id this is old index where event occur start then get new index where it is dragged this is newindex, now using arraymove giving blocks index new index and storing arraymove result inside updatedBlocks then i already created handleReorderBlocks passing updatedBlocks to it.
now wrapping dndcontext and passed handleDragEnd to onDragEnd that i created function in previous line also passed collisionDetection as closestCenter the functionality i did not describe here that are provided by dnd-kit itself it is librtary part that helped me for example closestCenter,SortableContext,verticalListSortingStrategy,arrayMove,useSortable.
now wrapped sortablecontext inside dndcontext then mapped blocks under sortableblock that i have created a vairiable that take block and handleUpdateBlock and made it sortable using usesortable i described it earlier now fixing jsx  setting a ref to main div for drag and passing as setnoderef that connects the draggable block with the dom element, and also passed listeners and attributes to their first child another div that is our drag block.
testing somework but i never getting now what is dragging but i can see because still i did not add any css.
now i work on utilities of drag animation for this import { CSS } from "@dnd-kit/utilities" then created variable const style = {
    transform: CSS.Transform.toString(transform),transition}
   and pass this style as style={style} to that main div where i added a setnoderef recently.
now i tested everything work.
except css its okay data persist even i refreshed many times localstorage saving data and also saving updating data effect dependency very helpful.
now i will focus on css.
removing browser default css by setting margin padding to 0 and hiding webkit scrollbar.
this is default so doing in index.css.
adding css classes to design canvas.
creating styles folder, now creating canvas.css file and importing in main.jsx to use it globally.
added cavas css with making canvas aria display grid set templete column to repeat(4,1fr) and for responsiveness i set for mobiles 2 column with 1fr.
also added drag handle class to drag block div and when hover set cursor to grabbing it looking awesome like holding something when we click and hold the block, made responsive.
now i will write palette css.
creating palette.css file.
added classes in palette component also added a palette title add blocks.
added palete css and made responsive with grid layout.

now i will create repo on github and deploy it.
created repo.
now deploying on vercel.
deployment done.
now commiting again to send this two new line. 

*****Key to be imroved in this project***
we can show preview like block.content right now we are showing only input value.
we can use img tag for image as of now user entering image url so we can set src={block.content} to show image on ui.
we can add heading in top as it is good personal content builder.
we can add font lists to user can select their favorite font.
we can add add black white screens so user can add their text or generate a thumb or any other creativity.
we can add remove block functionality to remove blocks from localstorage if user generate many blocks user stil confsued with long scroll even i wrapped in max width and set display to grid but remove function is better normal guy think a lot. 

