CREATE POLICY "Anyone can upload request files"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'request-files');

CREATE POLICY "Anyone can read request files for signing"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'request-files');