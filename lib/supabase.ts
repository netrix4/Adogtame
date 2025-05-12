import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = 'https://tgiqlthqfwkwilsikjea.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnaXFsdGhxZndrd2lsc2lramVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY5NDUwNzYsImV4cCI6MjA2MjUyMTA3Nn0.SjvTwvvI4NxkvDJ-IZj_ktTwfKXElxpTJswL4hySz6I'

export const supabase = createClient(url,key,{
    auth: {
        storage:AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl:false
    }
})