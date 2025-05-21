import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import IUserDataResponse from "../Interfaces/IUserDataResponse";
import { UserMetadata } from "@supabase/supabase-js";

const useProfileData = () => {
  const [userMetaData, setUserMetaData] = useState<IUserDataResponse>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>();

  const getProfileData = () => {
    setLoading(true);
    supabase.auth
      .getUser()
      .then((userData) => {
        setUserMetaData(userData.data.user?.user_metadata as IUserDataResponse);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        console.log("Finished promise");
        setLoading(false);
      });
  };
  useEffect(() => {
    getProfileData();
  }, []);
  return { userMetaData, error, loading };
};

export { useProfileData };
