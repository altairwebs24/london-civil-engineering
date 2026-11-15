CREATE POLICY "Public visitors can view London Group media"
ON storage.objects
FOR SELECT
TO anon, authenticated
USING (bucket_id = 'london-group-media');