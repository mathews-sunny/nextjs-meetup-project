import { useRouter } from "next/dist/client/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
const NewMeetup = () => {
  const router = useRouter();
  const addMeetuphandler = async (meetupData) => {
    console.log(meetupData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
    router.replace("/");
  };
  return (
    <Fragment>
      <Head>
        <title>New Meetup</title>
        <meta
          name="description"
          content="This is a page for adding new meetup"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetuphandler} />;
    </Fragment>
  );
};

export default NewMeetup;
