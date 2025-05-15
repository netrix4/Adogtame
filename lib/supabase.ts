import { createClient } from '@supabase/supabase-js'
import AsyncStorage from "@react-native-async-storage/async-storage";

const url = 'https://fhfyeymvnkwzvtkcsrvw.supabase.co'
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoZnlleW12bmt3enZ0a2NzcnZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwMzE1MDYsImV4cCI6MjA2MjYwNzUwNn0.o4-OzHUDY6qd9plCvhQbzAWJTPV52ZQlvMPPnNbOkOk'

export const supabase = createClient(url,key,{
    auth: {
        storage:AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl:false
    }
})
