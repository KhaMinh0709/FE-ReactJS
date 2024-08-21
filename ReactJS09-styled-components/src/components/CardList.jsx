import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CardListItem = styled.div`
    display: flex;
    grid-template-columns: repeat(3,1fr);
    gap: 30px;
`
const CardList = () => {
    return (
        <CardListItem>
            <Card
                srcIMG="https://t4.ftcdn.net/jpg/01/62/69/25/360_F_162692511_SidIKVCDnt5UKHPNqpCb2MSKvfBlx1lG.jpg"
                avt="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                Author = "NKMDEV"></Card>
            <Card
                srcIMG="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-scenery-smartphone-wallpaper-free-photo.jpg?w=2210&quality=70"
                avt="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmttg1skZoFW3XsKi_lJb9BJe8hm6HvMgsyA&s"
                Author = "VVDDev"></Card>
            <Card
                srcIMG="https://wallpapers.com/images/featured/beautiful-3vau5vtfa3qn7k8v.jpg"
                avt="https://cdn4.sharechat.com/img_561733_3069ad75_1676468559155_sc.jpg?tenant=sc&referrer=tag-service&f=155_sc.jpg"
                Author = "JavaWithLove"></Card>
        </CardListItem>
    );
};

export default CardList;    