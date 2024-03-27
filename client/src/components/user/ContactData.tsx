import React from 'react';

const contactData = [
    {
        image : "https://s3-alpha-sig.figma.com/img/f006/4cfe/cd7d7e333cb343c07df1a46d3ba07d2c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qFbRmEaRQTETwN9BmmKhOlQzvc9Q5TjxiMOLYcIvXCCDx8CxrC-z57iTIwI1V-48Mm9CFYHL2dsBjuaDcWC7jCWd8iETWJm9GiJyg9TV08YKpnjYYDf0PI1DYDI6KO0xnQBj2ILKcb-LweuIkgdcheVDL6Vh1625rUIAdhbkJGxHIhG~oAC-QPCNE53v2BKYOhBNtVg~DTHQLoyZfqF2ce4NND7gWPOlbQxyfI8oE8BvKLiX~8Ghgl~BSPa~-VgTg4DkkC9~2WcCKlJkZvU5Akpl6W-SBpqTBeXaj~gbwdKSQqb3wqgfXS6uV3Z-Rb9Y1JejJWzY-Tb3ddol0ifDmw__",
        name : "Үүргэвч",
        color : "Өнгө: Саарал",
        price : '750000'
    },
]

export default function ContactData() {
    return (
        <div>
            {contactData.map((el) => {
            return(
                <section className='flex'>
                    <div className='w-[86px] h-[87px]'>
                        {el.image}
                    </div>
                    <div className='flex flex-col'>
                        <p className=''>
                            {el.name}
                        </p>
                        <p className='text-[#A1A8C1]'>
                            {el.color}
                        </p>
                    </div>
                    <div>
                        {el.price}
                    </div>
                </section>
            )
        })}
        </div>
    )
}