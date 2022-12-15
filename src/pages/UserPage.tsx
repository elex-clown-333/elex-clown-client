import React, {FC, useEffect, useState} from 'react'
import classes from '../styles/UserPage.module.scss'
import axios from "axios";
const UserPage:FC=()=>{
    let[src,setSrc] = useState<string>('')
    useEffect(()=>{
        // axios.get('https://jsonplaceholder.typicode.com/photos/1').then(response=>{
        //     setSrc(response.data.url)
        // })


        window.addEventListener('scroll',function(e){
            window.scrollY > 150 ? document.querySelector(`.${classes.scrollToTop}`).classList.add(classes.scrolled): document.querySelector(`.${classes.scrollToTop}`).classList.remove(classes.scrolled)
        })
    },[])
    return (
        <>
            <div style={{marginLeft:270,marginTop:80,marginRight:20}} className={classes.main}>
        <div  className={classes.biography}>
            <div style={{flexShrink:0}} className={classes.avatar}>

            </div>
            <div className={classes.data}>
            <h2>Bobr Kurwa Bobrovich</h2>
                <div>
            <h4>Date of birth: 69.69.6969</h4>
            <h4>Residence: Huevo-Kukuevo 32 st.</h4>
                </div>
            <h4>Appointment date: 29.228.14888</h4>
            </div>
            <div className={classes.editBtn}>
                <button>Edit</button>
                <button>Cancel</button>
                {/*<button>Save</button>*/}

            </div>
        </div>
                <p style={{marginTop:20}}>
                    <h3>Protocol</h3>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi, delectus dolor ducimus eos est eum, illo impedit labore, minus perspiciatis qui quibusdam quis quos ratione rerum suscipit. Aut ducimus ea esse necessitatibus obcaecati officiis porro quidem tempora vero? Consectetur dolores eos facere incidunt laborum nesciunt numquam porro, praesentium quia quis rem reprehenderit sequi soluta vitae voluptates. Accusantium blanditiis culpa dolorum ducimus id magni obcaecati quas sunt? Accusamus aliquam architecto assumenda corporis distinctio dolore dolores eligendi eos esse eveniet, exercitationem expedita fuga id iure magnam magni nemo nihil officiis possimus quasi qui quia quidem sit tenetur voluptatem! Asperiores assumenda aut, autem, blanditiis cupiditate dolor ea eos est eum facere fuga harum illo inventore laboriosam magni maiores maxime nemo nesciunt nobis omnis possimus reiciendis, rem suscipit totam vitae voluptates voluptatibus voluptatum! Ad aspernatur blanditiis id incidunt iure magnam nobis quae sequi velit! Assumenda at consequatur cumque dolores dolorum est et exercitationem fugiat, hic, ipsum iste labore maiores maxime molestiae quis ratione reiciendis sed sit suscipit velit. Alias animi cumque debitis deserunt, dolore doloremque, ea eius enim eum ex fugiat fugit harum incidunt iste magnam molestiae obcaecati officia omnis pariatur qui repellendus sapiente, sed sequi sit velit veritatis voluptas! Enim et odit quo ut veritatis! Doloremque error eum ipsam nesciunt nobis reprehenderit voluptatibus. Aut cum explicabo id possimus repellat repudiandae tenetur! Accusantium dignissimos expedita iusto quos suscipit? Atque dignissimos fuga itaque iure molestias porro suscipit? Adipisci architecto assumenda at atque cumque dolorem earum eligendi expedita explicabo facere ipsam itaque magnam minus modi nam nemo non numquam officiis, possimus provident quaerat quas quos sapiente sequi similique sint suscipit, velit voluptates voluptatibus voluptatum? Aspernatur beatae eum maxime modi porro quae quam tempora ullam. Consectetur distinctio dolor error eum incidunt, magnam natus nulla perspiciatis quod, saepe suscipit, tenetur vitae voluptates. A aperiam aut cum deleniti et eum ipsa ipsam itaque minus natus odit, perspiciatis porro quia recusandae rerum suscipit voluptates! Accusamus aliquid amet consequatur delectus dignissimos, distinctio doloremque dolorum eos excepturi facere fugit ipsa iure iusto laboriosam magnam natus officia placeat praesentium quasi ratione sit sunt ullam ut veniam voluptatum! Ducimus error laboriosam nemo omnis rem repellat sit. Distinctio doloribus eius et excepturi id itaque laborum sunt. Amet architecto corporis culpa, cupiditate deleniti, doloribus et facilis hic, illo incidunt ipsum iure nesciunt non quo voluptates! A aperiam at cum debitis deleniti distinctio, dolorem ducimus eos esse et fuga hic incidunt inventore iste, minus natus necessitatibus possimus quisquam quod recusandae reiciendis repellendus saepe sed temporibus ullam velit veritatis voluptatum? Accusantium ad amet aspernatur consequuntur, debitis ducimus ea eius eligendi eos harum in incidunt ipsa laboriosam minima nisi nulla omnis pariatur quae quisquam repellat repudiandae sint voluptatibus voluptatum! Alias aliquid architecto assumenda aut earum est exercitationem facilis harum in iusto minima minus odio quas quasi quis ratione, repudiandae veniam voluptatum. Ab accusamus adipisci alias aliquam aliquid amet cum eveniet excepturi exercitationem expedita, explicabo fugit, illum iure laudantium magni molestias nemo numquam officiis perferendis quidem quo sed sint sunt suscipit tempora temporibus totam ullam velit voluptatem voluptates. Aliquam!</p>
            </div>
            <div onClick={e=>{
                scrollTo(0,0)
            }} className={classes.scrollToTop}>
                <span>^</span>
            </div>
            </>
    )
}
export default UserPage
