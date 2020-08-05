import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Card from '../../components/Card';
import HeaderButton from '../../components/HeadButton';
import Modal from '../../components/Modal';
import Backdrop from '../../components/Backdrop';

const UserCard = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png',
        }}
        style={{ width: 50, height: 50, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>{props.children}</View>
    </View>
  );
};

const QuestionCard = (props) => {
  const [show, setShow] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        setShow((pre) => !pre);
      }}
      style={styles.container}
    >
      <Card style={{ width: '100%', overflow: 'hidden' }}>
        <UserCard>
          <Text style={styles.head}>{props.title}</Text>
          <Text>
            {props.user} : {props.time} ago
          </Text>
          <Text style={{ minHeight: 60, paddingVertical: 10 }}>
            {props.desc}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}
          >
            <Text style={styles.bold}>{props.reply.length} replies</Text>
            <Text style={styles.bold}>See Replies</Text>
          </View>
        </UserCard>
        {show
          ? props.reply.map((el, ind) => {
              return (
                <UserCard key={ind}>
                  <Text>
                    {el.user} : {el.time} ago
                  </Text>
                  <Text style={{ minHeight: 60, paddingVertical: 10 }}>
                    {el.desc}
                  </Text>
                </UserCard>
              );
            })
          : null}
      </Card>
    </TouchableOpacity>
  );
};

const Questions = (props) => {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            name="Ask a Question"
            color="#0970ba"
            onPress={() => setShow(true)}
          />
        );
      },
    });
  });

  const renderComp = ({ item }) => (
    <QuestionCard
      title={item.title}
      desc={item.desc}
      user={item.user}
      time={item.time}
      reply={item.reply}
    />
  );
  return (
    <>
      <FlatList
        keyExtractor={(item, ind) => ind + ''}
        renderItem={renderComp}
        data={[
          {
            title: 'Operating System',
            desc: 'What is Operating System.',
            user: 'sourav07',
            time: '5hrs',
            reply: [
              {
                desc:
                  'An operating system (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs.',
                user: 'drsuraj_sharma',
                time: '1hrs',
              },
            ],
          },
          {
            title: 'Kernel In OS',
            desc: 'What is Kernel in OS?',
            user: 'debrup28',
            time: '1day',
            reply: [
              {
                desc:
                  'A Kernel is a computer program that is the heart and core of an Operating System.The Kernel remains in the memory until the Operating System is shut-down. The Kernel is responsible for low-level tasks such as disk management, memory management, task management, etc.',
                user: 'gopala420',
                time: '23hrs',
              },
            ],
          },
          {
            title: 'Process In OS',
            desc: 'How to create a process in OS?',
            user: 'ananya12',
            time: '3days',
            reply: [
              {
                desc:
                  'Process creation is achieved through the fork() system call. The newly created process is called the child process and the process that initiated it (or the process when execution is started) is called the parent process.',
                user: 'gopala420',
                time: '2days',
              },
            ],
          },
          {
            title: 'Thread in OS',
            desc: 'What is thread in OS?',
            user: 'sanj07',
            time: '4days',
            reply: [
              {
                desc: 'You can issue book from Help Me section.',
                user: 'gopala420',
                time: '3days',
              },
            ],
          },
        ]}
      />
      <Backdrop show={show} press={() => setShow(false)} />
      <Modal show={show} />
    </>
  );
};
export default Questions;
const styles = StyleSheet.create({
  screen: { alignItems: 'center', justifyContent: 'center' },
  container: {
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  head: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 7,
  },
  bold: {
    fontWeight: '700',
    fontSize: 16,
  },
});
