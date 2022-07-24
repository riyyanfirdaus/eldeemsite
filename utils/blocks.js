import Image from 'next/image';

export const renderBlock = (block, typePage) => {
    switch (block.type) {
        case 'heading_1': 
        // For a heading
            return <h1>{ block.heading_1.text[0].plain_text } </h1> 
        case 'image': 
        // For an image
            return (block.image.hasOwnProperty('file')) ?
                <div className="mt-2 mb-2"><Image src={ block.image.file.url } width="100%" height="100%" layout="responsive" objectFit="contain" priority /></div> :
                <div className="mt-2 mb-2"><Image src={ block.image.external.url } width="100%" height="100%" layout="responsive" objectFit="contain" priority /></div>
        case 'bulleted_list_item': 
            // For an unordered list
            return <ul><li className="list-disc mt-6 mb-6">{ block.bulleted_list_item.text[0].plain_text } </li></ul >
        case 'paragraph': 
            // For a paragraph
            return (typePage !== 'act') ?
            <p className="mt-6 mb-6">{ block.paragraph.text[0]?.text?.content } </p> :
            <p>{ block.paragraph.text[0]?.text?.content } </p>
        default: 
        // For an extra type
            return <p>Undefined type </p>
    }

}